import { css } from "@emotion/react"
import React from "react"

export const Button: React.FC = ({ children }) => {
  return (
    <button
      css={css`
        background: hotpink;
        &:hover {
          background: purple;
        }
      `}
    >
      {children}
    </button>
  )
}
