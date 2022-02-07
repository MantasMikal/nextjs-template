import React, { useEffect, useRef, useState } from 'react'
import { bool, number } from 'prop-types'
import classNames from 'classnames'

import styles from './VideoLooper.module.scss'

import ResponsiveMedia from '../ResponsiveMedia'
import Video from '../Video'
import Icon from '../Icon'
import Spinner from '../Spinner'

const videoStateData = {
  loading: {},
  canplay: { actionText: 'Play', actionIcon: 'play' },
  play: { actionText: 'Pause', actionIcon: 'pause' },
  pause: { actionText: 'Play', actionIcon: 'play' },
  ended: { actionText: 'Restart', actionIcon: 'replay' }
}

const VideoLooper = ({ ratio, showProgress, smallAction, ...other }) => {
  const [videoState, updateVideoState] = useState('loading')
  const [progress, updateProgress] = useState(0)

  // TODO: refactor hooks elsewhere

  const videoRef = useRef(null)

  const handleTogglePlayState = () => {
    if (videoRef.current.paused) {
      updateVideoState('play')
      videoRef.current.play()
    } else {
      updateVideoState('pause')
      videoRef.current.pause()
    }
  }

  const handleTimeUpdate = () => {
    if (!videoRef || !videoRef.current) return
    const progress =
      (videoRef.current.currentTime / videoRef.current.duration) * 100
    updateProgress(progress)
  }

  useEffect(() => {
    const video = videoRef.current
    const handleUpdatePlayState = (e) => {
      updateVideoState(e.type)
    }

    video.addEventListener('canplay', handleUpdatePlayState, { once: true })
    video.addEventListener('play', handleUpdatePlayState)
    video.addEventListener('pause', handleUpdatePlayState)
    video.addEventListener('ended', handleUpdatePlayState)

    return () => {
      video.removeEventListener('play', handleUpdatePlayState)
      video.removeEventListener('pause', handleUpdatePlayState)
      video.removeEventListener('ended', handleUpdatePlayState)
    }
  }, [])

  useEffect(() => {
    const video = videoRef.current
    video.addEventListener('timeupdate', handleTimeUpdate)
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate)
    }
  }, [])

  const { actionText, actionIcon } = videoStateData[videoState]

  return (
    <div className={styles.VideoLooper}>
      <ResponsiveMedia ratio={ratio}>
        <Video setRef={videoRef} {...other} playsInline />
      </ResponsiveMedia>

      <button
        className={classNames(
          styles.VideoLooperAction,
          smallAction && styles.smallAction,
          styles[videoState]
        )}
        onClick={videoState !== 'loading' ? handleTogglePlayState : undefined}
      >
        {videoState !== 'loading' && (
          <Icon
            type={actionIcon}
            a11yText={actionText}
            width={smallAction ? 24 : 48}
          />
        )}
        {videoState === 'loading' && <Spinner spinning revealDelay={1000} />}
      </button>

      {showProgress && (
        <div className={styles.VideoLooperProgress}>
          <div
            className={styles.VideoLooperProgressInner}
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  )
}

VideoLooper.propTypes = {
  ratio: number,
  showProgress: bool,
  smallAction: bool
}

export default VideoLooper
