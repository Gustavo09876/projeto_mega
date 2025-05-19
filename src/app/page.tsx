import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav className='mt-6'>
        <Link href="/Login">Acesse o Login</Link>
        <Link href="/Cadastro">Acesse o Cadastro</Link>
      </nav>
    </div>
  );
}
