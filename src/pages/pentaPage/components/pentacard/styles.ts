import styled from 'styled-components'

export const Card = styled.div`
    width: 21rem;
    height: 22rem;
    z-index:1;
`
export const CardBottomItem = styled.div`
    display: none;
    margin-left: .7rem;
    border: none;
    background-color: transparent;
`

export const CardContainer = styled.div`
    width: 19rem;
    height: 18.5rem;
    margin: 0.1rem auto;
    border: 0.1rem solid #cecece;
    border-radius: 0.5rem;
    background:  ${props => (props.primary ? props.primary === 'like' ? 'linear-gradient(91deg,#f1eefc,#9dc6ff 70%,#a5bcff)' : 'linear-gradient(to bottom, #000000 0%,#ffffff 100%);'  : "bisque")};
    position: relative;
    margin-bottom: 1.5rem;
    overflow: hidden;
    transition: all .5s ease-in-out;
    :hover{
      width: 20rem;
      height: 20rem;
    }
    :hover ${CardBottomItem}{
      display: block ;
    }
`
export const CardId = styled.div`
    position: absolute;
    background: ${props => (props.primary ? props.primary === 'like' ? 'linear-gradient(91deg,#f1eefc,#9dc6ff 70%,#a5bcff)' : 'linear-gradient(to bottom, #000000 0%,#ffffff 100%);'  : "bisque")};
    width: 50px;
    top: 19px;
    left: -6px;
    transform: rotate(-45deg);
    text-align: center;
    border-radius: 4px;
`
export const CardView = styled.div`
    position: absolute;
    margin-left: calc(100% - 20px);
    margin-top: calc(100% - 110px);
    color: #cecece;
    opacity: .7;
`
export const CardImg = styled.div`
    margin: 1rem 0;
    text-align: center;
`


export const CardTitle = styled.div`
    margin: 1rem 0;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
`
export const CardAurthorAndTime  = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0.9rem 0.8rem;
    margin-bottom: 0.1rem;
`
export const CardAurthororTime  = styled.div`
    min-width: 136px; 
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
`
export const CardBottom = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`

