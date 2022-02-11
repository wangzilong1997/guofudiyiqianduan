import React, { useEffect, useState, useRef } from 'react'

import * as s from './styles'

import axios from 'axios';
import qs from 'qs';

import kiss from '@/asset/card/kiss.svg'
import amazed from '@/asset/card/amazed.svg'
import scared from '@/asset/card/scared.svg'

import { transformtime } from '@/utils/utils';

interface IData {
  author: string | null;
  ilike: string | number | null;
  imgurl: string | null;
  iunlike: string | number | null;
  likes: string | number | null;
  pentaid: string | number;
  time: string | null;
  title: string | null;
  type: string | null;
  unlikes: string | number | null;
  url: string | null;
  userid: string | number | null;
  views: string | number | null;
}

interface IPentaCard {
  data: IData;
  key: number;
}

const PentaCard: React.FC<IPentaCard> = (props) => {
  const { data, key } = props

  const [cardData, setCardData] = useState(data)

  const [moreLike, setMorelike] = useState(null)


  useEffect(() => {
    if (cardData.likes || cardData.unlikes) {
      if (cardData.likes >= cardData.unlikes) {
        setMorelike('like')
      } else {
        setMorelike('unlike')
      }
    }
  }, [])

  // 点击事件
  const cardClick = (type: string): void => {
    console.log('like', type)
    let url: string;
    let data: any;
    let cardType: string;
    let showNum: string | number | null;

    if (~cardData.url.indexOf('huya')) {
      cardType = 'hy'
    } else {
      cardType = 'dy'
    }
    switch (type) {
      case 'like':
        showNum = 'likes'
        url = '/penta/common/like'
        data = {
          pentaid: cardData.pentaid,
          type: cardType,
          userid: window.localStorage.getItem('userid'),
          likes: 'likes',
          likesval: 1
        }
        break;
      case 'unlike':
        showNum = 'unlikes'
        url = '/penta/common/like'
        data = {
          pentaid: cardData.pentaid,
          type: cardType,
          userid: window.localStorage.getItem('userid'),
          likes: 'unlikes',
          likesval: 1
        }
        break;
      case 'click':
        url = '/penta/common/view'
        showNum = 'views'
        data = {
          pentaid: cardData.pentaid,
          views: 1,
          type: cardType,
          userid: window.localStorage.getItem('userid')
        }
        break;
      default:
        break;
    }

    type && axios
      .post(url, qs.stringify(data))
      .then((res) => {
        console.log('ressss', res)
        if (res?.data?.success) {
          let data = JSON.parse(JSON.stringify(cardData))
          data[showNum]++
          if (data.likes || data.unlikes) {
            if (data.likes >= data.unlikes) {
              setMorelike('like')
            } else {
              setMorelike('unlike')
            }
          }
          setCardData(data)
        }
      })

  }
  return (
    <>
      <s.Card key={key}>
        <s.CardContainer primary={moreLike}>
          <s.CardId primary={moreLike}>
            {cardData.pentaid}
          </s.CardId>
          <s.CardView>
            {cardData.views || 0}
          </s.CardView>
          <s.CardImg>
            <a href={cardData.url} target="_blank" rel="noopener noreferrer">
              <img src={cardData.imgurl} alt="图片路径" width="290px" height="200px" />
            </a>
          </s.CardImg>
          <s.CardTitle>
            {
              cardData.title
            }
          </s.CardTitle>
          <s.CardAurthorAndTime>
            <s.CardAurthororTime>
              {
                cardData.author
              }
            </s.CardAurthororTime>
            <s.CardAurthororTime>
              {
                transformtime(new Date(cardData.time))
              }
            </s.CardAurthororTime>
          </s.CardAurthorAndTime>
          <s.CardBottom>
            <s.CardBottomItem onClick={() => cardClick('like')}>
              <img src={kiss} width='20px' height="20px" alt="喜欢"></img>    喜欢{cardData.likes || 0}
            </s.CardBottomItem>
            <s.CardBottomItem onClick={() => cardClick('unlike')}>
              <img src={scared} width='20px' height="20px" alt="不喜欢"></img> 不喜欢{cardData.unlikes || 0}
            </s.CardBottomItem>
            <s.CardBottomItem onClick={() => cardClick('click')}>
              <img src={amazed} width='20px' height="20px" alt="浏览量"></img> 浏览量{cardData.views || 0}
            </s.CardBottomItem>
          </s.CardBottom>
        </s.CardContainer>
      </s.Card>
    </>
  )
}

export default PentaCard