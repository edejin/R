import {createSelector} from 'reselect'
import React from 'react'
import Smiles from '../constants/Smiles'

const messagesSelector = state => state.messages
const nicksSelector = state => state.nicks

export const prettyMessagesSelector = createSelector(
  messagesSelector,
  nicksSelector,
  (messages, nicks) => {

    let replace = [
      ...nicks.map(from => ({
        from,
        to: (<span className="nick">{from}</span>)
      })),
      ...Smiles.map((from, i) => ({
        from,
        to: (<span className={'smile s' + i}>{from}</span>)
      }))
    ]

    let rep = function self(message, pairs) {
      if (!pairs.length) {
        return message
      }
      let pair = pairs.pop();
      return message.split(pair.from).reduce((p, v, i) => {
        if (i > 0) {
          p.push(pair.to)
        }
        return [
          ...p,
          self(v, pairs.slice())
        ]
      }, [])
    }

    return messages.map(m => ({
      key: m.time,
      message: [(
        <span
          className="from">{m.nick}:</span>), ' ', rep(m.message, replace.slice())]
    }))
  }
)