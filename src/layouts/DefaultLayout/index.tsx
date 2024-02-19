import { Outlet } from 'react-router-dom'
import * as S from './styles'
import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <S.Container>
      <div className="card">
        <Header />
        <Outlet />
      </div>
    </S.Container>
  )
}
