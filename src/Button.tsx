import { css } from "@emotion/react"

export function Button({ children }) {
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
