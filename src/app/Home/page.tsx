'use client';
import Image from 'next/image';
import React, {useState} from 'react';
import SidebarLabels from '../Modulos/ListSideBar.js';
import SideBarTitle from '../Modulos/SideBarTitle.js';

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Função para alternar a visibilidade da barra lateral
  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div className='barraLateral' 
        style={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: isExpanded ? 'start' : 'center',
          backgroundColor: '#A2BFC7',
          width: isExpanded ? '198px' : '76px',
          height: '100vh',
          padding: '10px', 
        }}>
        <Image
          src="/assets/Pictures/Icons/logo-dasky 1.png"
          alt="Background"
          width={35}
          height={33}
          style={{
            left: isExpanded ? '10px' : '0px',
            paddingBottom: '10px',
          }}
        />
        <div
          className="Profile-card"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            border: '1px solid #ffffff',
            borderRadius: '10px',
            width: isExpanded ? '178px' : '55px',
            height: isExpanded ? '55px' : '39px',
            padding: '4px',
            justifyContent: 'space-between',
          }}>
          <div
            className="Profile-card-image"
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              src="/assets/Pictures/Icons/Perfil.png"
              alt="Perfil"
              width={30}
              height={30}
            />
          </div>
          {isExpanded && (
            <div
            className="Profile-card-name"
            style={{
              marginLeft: '10px',
              fontSize: '14px',
              color: '#ffffff',
            }}>
            Nome do Usuário
          </div>
          )}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20"  height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"  strokeLinejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down"
              style={{ cursor: 'pointer' }}>
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>
        <div className = "Hamburguer" style={{ paddingBottom: '20px', paddingTop: '5px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu-icon lucide-menu"
          style={{ 
            cursor: 'pointer', 
            position: isExpanded ? 'fixed' : 'static',
            top: isExpanded ? '12px' : '0px',
            left: isExpanded ? '164px' : '0px',
            }} 
            onClick={toggleSidebar}>
          <path d="M4 12h16"/><path d="M4 18h16"/>
          <path d="M4 6h16"/>
          </svg>
        </div>
        {/* Botão de "Home" com ícone */}
        <div className='HomePage' style={{display: 'flex', alignItems: 'center', paddingTop: '10px'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house-icon lucide-house"
          style={{ cursor: 'pointer' }}>
          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
          {isExpanded && (
            <div className='HomePageTitle'>
              <SideBarTitle Text="Home" />
            </div>
          )}
        </div>
        {/*Botão de "Calendário" com ícone*/} 
        <div className='Calendario' style={{display: 'flex', alignItems: 'center', paddingTop: '10px'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days-icon lucide-calendar-days"
          style={{ cursor: 'pointer' }}>
          <path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
          {isExpanded && (
            <div className='HomePageTitle'>
              <SideBarTitle Text="Calendario" />
            </div>
          )}
        </div>
        {/* Botão de "Grupos" com ícone */}
        <div className = 'Grupos' style={{ paddingTop: '30px', display: isExpanded ? 'flex' : 'block', alignItems: 'center'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase-icon lucide-briefcase"
          style={{ cursor: 'pointer' }}>
          <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
          {isExpanded && (
            <div className='HomePageTitle'>
              <SideBarTitle Text="Grupos" />
            </div>
          )}
            {/* Botão de "Adicionar grupo" com ícone */}
            <div style={{ paddingTop: isExpanded ? '0' : '0px', paddingLeft: isExpanded ? '10px' : '0' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
            </div>
          </div>
        {/* Lista de grupos com ícone */}
        <SidebarLabels isExpanded={isExpanded}/>
        <div
          style={{
            position: 'fixed',
            height: '60px',
            bottom: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            alignItems: isExpanded ? 'start' : 'center',
          }}>
          {/* Botão de "Configurações" com ícone */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings-icon lucide-settings"
            style={{ cursor: 'pointer' }}>
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>
            </svg>
            {isExpanded && (
            <div className='HomePageTitle'>
              <SideBarTitle Text="Configurações" />
            </div>
          )}
          </div>
          {/* Botão de "Sair" com ícone */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <a href="/Login" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out-icon lucide-log-out"
            style={{ cursor: 'pointer' }}>
            <path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg>
            {isExpanded && (
            <div className='HomePageTitle'>
              <SideBarTitle Text="Sair" />
            </div>
            )}
            </a>
          </div>
        </div> 
      </div>
    </div>
  );
}
