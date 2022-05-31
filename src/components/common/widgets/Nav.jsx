import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">홈으로</Link>
        </li>
        <li>
          <Link to="/login">로그인</Link>
        </li>
        <li>
          <Link to="/todolist">투두리스트</Link>
        </li>
        <li>
          <Link to="/ui-preview">ui-preview</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav