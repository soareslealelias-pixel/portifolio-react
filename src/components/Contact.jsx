import React from 'react';

const Contact = () => (
  <section id="contato" className="section">
    <div className="contact-box">
      <h2>Vamos construir algo juntos?</h2>
      <p>
        Minha caixa de entrada está sempre aberta. Seja para uma oportunidade profissional, 
        projetos freelancer ou apenas para trocar ideias sobre arquitetura de software.
      </p>
      
      {/* Container adicionado para alinhar os botões corretamente caso fiquem juntos */}
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="mailto:soareslealelias@gmail.com" className="btn primary">
          Diga Olá
        </a>
        <a 
          href="https://www.instagram.com.br/soareslealelias" 
          target="_blank" 
          rel="noreferrer" 
          className="btn primary"
        >
          Instagram
        </a>
      </div>
    </div>
  </section>
);

export default Contact;