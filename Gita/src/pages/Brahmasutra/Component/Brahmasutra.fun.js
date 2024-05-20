import { useState, useEffect, useRef } from 'react'
import { goTranslate } from '../../../Function/utils'
import { fetchGitasContent } from '../../../Function/services/services'

const BrahmasutraFun = () => {
  useEffect(() => {
    document.title = 'Brahmasutra | Gita'
    return () => {
      document.title = 'Brahmasutra | Gita'
    }
  }, [])
  const [selectedChapter, setSelectedChapter] = useState(1)
  const [selectedQuarter, setSelectedQuarter] = useState(1)
  const [selectedSutra, setSelectedSutra] = useState(1)
  const [OptionLength, setOptionLength] = useState(1)
  const [sutraContent, setSutraContent] = useState('')
  const [translateContent, setTranslateCotent] = useState('')
  const [isSharePopVisible, setSharePopVisible] = useState(false)
  const [isHindiTranslate, setIsHindiTranslate] = useState(true)
  const [hideTrans, setHideTrans] = useState(false)
  const [clickEvent, setClickEvent] = useState(null)
  const [data, setData] = useState({})
  const shareRef = useRef(null)
  var site = 'brahmasutra'
  var shId = `sh-${site}-${selectedChapter}-${selectedQuarter}-${selectedSutra}`
  var shareTitle = `Brahma Sutra, Chapter: ${selectedChapter}, Quarter: ${selectedQuarter}, shloka: ${selectedSutra}.`
  const handleClick = event => {
    if (!isSharePopVisible) {
      setClickEvent(event)
      setSharePopVisible(true)
    } else {
      closeSharePop()
    }
  }
  const closeSharePop = () => {
    setSharePopVisible(false)
  }
  useEffect(() => {
    const handleClickOutside = event => {
      const target = event.target || event.srcElement
      if (target && shareRef !== null) {
        const share_b = !shareRef.current.contains(target)
        if (share_b) {
          setTimeout(() => {
            closeSharePop()
          }, 100)
        }
      }
    }
    document.body.addEventListener('click', handleClickOutside)
    window.addEventListener('scroll', () => closeSharePop(), { capture: true })
    window.addEventListener('resize', () => closeSharePop())
    return () => {
      document.body.removeEventListener('click', handleClickOutside)
      window.removeEventListener('scroll', () => closeSharePop(), {
        capture: true,
      })
      window.removeEventListener('resize', () => closeSharePop())
    }
  }, [shId])
  const handleChapterChange = evnet => {
    const newChapter = parseInt(evnet.target.value, 10)
    setSelectedChapter(newChapter)
    setSelectedQuarter(1)
    setSelectedSutra(1)
    setData({})
  }
  const handleQuarterChange = evnet => {
    const newQuarter = parseInt(evnet.target.value, 10)
    setSelectedQuarter(newQuarter)
    setSelectedSutra(1)
    setData({})
  }
  const handleSutraChange = evnet => {
    const newSutra = parseInt(evnet.target.value, 10)
    setSelectedSutra(newSutra)
  }

  const _changeCodeToEn = async () => {
    setIsHindiTranslate(false)
    await goTranslate({
      sansContent: sutraContent,
      whatcode: isHindiTranslate,
      setTranslateCotent,
    })
  }
  const _changeCodeToHi = async () => {
    setIsHindiTranslate(true)
    await goTranslate({
      sansContent: sutraContent,
      whatcode: isHindiTranslate,
      setTranslateCotent,
    })
  }
  function _hideTrans() {
    if (hideTrans) {
      setHideTrans(false)
    } else {
      setHideTrans(true)
    }
  }
  useEffect(() => {
    if (sutraContent !== '' && sutraContent) {
      goTranslate({
        sansContent: sutraContent,
        whatcode: isHindiTranslate,
        setTranslateCotent,
      })
    } else {
      setTranslateCotent('Wait for Shloka!')
    }
  }, [sutraContent, isHindiTranslate, selectedChapter, selectedQuarter, selectedSutra])

  useEffect(() => {
    let _path = `/gitas/database/brahmasutra/chapters/Chapter${selectedChapter}/quarters/Quarter${selectedQuarter}/sutrasdoc`
    Object.keys(data).length === 0 &&
      selectedChapter &&
      selectedQuarter &&
      fetchGitasContent({
        _path,
        setOptionLength,
        selectedShloka: selectedSutra,
        setShlokaContent: setSutraContent,
        _fieldname: 'Sutra',
        setData: setData,
      })
  }, [data, sutraContent, selectedChapter, selectedQuarter, selectedSutra])

  useEffect(() => {
    Object.keys(data).length > 0 && setSutraContent(data[`Sutra${selectedSutra}`])
  }, [data, selectedSutra])

  return {
    OptionLength,
    _changeCodeToEn,
    _changeCodeToHi,
    clickEvent,
    handleChapterChange,
    handleClick,
    handleQuarterChange,
    handleSutraChange,
    _hideTrans,
    hideTrans,
    isHindiTranslate,
    isSharePopVisible,
    selectedChapter,
    selectedQuarter,
    selectedSutra,
    shareRef,
    shareTitle,
    shId,
    site,
    sutraContent,
    translateContent,
  }
}
export default BrahmasutraFun
