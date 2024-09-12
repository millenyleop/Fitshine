import React, { useState } from 'react';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    '/imagens/carr1.png',
    '/imagens/carr2.png',
    '/imagens/carr3.png',
    '/imagens/carr4.png'
  ];
  const totalSlides = slides.length;

  const showSlide = (index) => {
    if (index >= totalSlides) {
      setCurrentIndex(0);
    } else if (index < 0) {
      setCurrentIndex(totalSlides - 1);
    } else {
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => {
    showSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    showSlide(currentIndex - 1);
  };

  return (
    <div>
      <div className="carousel">
        <div className="carousel-inner" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <img key={index} src={slide} alt={`Imagem ${index + 1}`} />
          ))}
        </div>
        <button className="carousel-control prev" onClick={prevSlide}>&#10094;</button>
        <button className="carousel-control next" onClick={nextSlide}>&#10095;</button>
      </div>

      <div className="info-section" style={{ 
        marginTop: '2cm', 
        padding: '20px', 
        maxWidth: '1200px', 
        marginLeft: 'auto', 
        marginRight: 'auto' 
      }}>
        <div className="info-item" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', justifyContent: 'flex-start' }}>
          <img src="/imagens/inf1.png" alt="Imagem de Alimentação Saudável" style={{ width: '250px', height: 'auto' }} />
          <div style={{ marginLeft: '20px', flex: 1 }}>
            <h2 style={{ textAlign: 'center' }}>ALIMENTAÇÃO SAUDÁVEL</h2>
            <p>Uma alimentação saudável é crucial para o bem-estar e a prevenção de doenças...</p>
          </div>
        </div>
        <div className="info-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
          <img src="/imagens/inf2.png" alt="Imagem de Atividades Físicas" style={{ width: '250px', height: 'auto' }} />
          <div style={{ marginLeft: '20px', flex: 1 }}>
            <h2 style={{ textAlign: 'center' }}>EXERCITE-SE</h2>
            <p>Praticar atividades físicas é vital para a saúde...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
