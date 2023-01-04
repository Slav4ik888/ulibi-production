/* eslint-disable max-len */
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Article, ArticleList } from 'entities/article';



const ArticlePage = memo(() => {
  const { t } = useTranslation('article');

  const article = {
    id: '1',
    title: 'JS - news. What news in JS in 2022 ',
    subtitle: 'What news in JS in 2022',
    img: 'https://fuzeservers.ru/wp-content/uploads/9/3/a/93a14a817aba78c219b6421198863989.png',
    views: 1022,
    createdAt: '26.03.2022',
    type: [
      'IT',
      'DESING',
      'ECONOMIC'
    ],
    blocks: [
      {
        id: '1',
        type: 'TEXT',
        title: 'Header this block 111',
        paragraphs: [
          'Some paragraph nuh... ',
          'Download 298 Javascript Vector Icons for commercial and personal use. Available for free or premium in line, flat, gradient, isometric, glyph, sticker & more design styles.',
          'Free Javascript icons in various UI design styles for web, mobile. Download static and animated Javascript vector icons for free in PNG, SVG, GIF formats.'
        ]
      },
      {
        id: '2',
        type: 'CODE',
        code: 'import { render } from \'react-dom\';\n import { BrowserRouter } from \'react-router-dom\';\n import { ErrorBoundary } from \'app/providers/error-boundary\';\n import { StoreProvider } from \'app/providers/store\';\n import { ThemeProvider } from \'app/providers/theme\';\n import { App } from \'./app\';\n import \'shared/config/i18n\';\n import \'./app/styles/index.scss\';\n \n\n render(\n  <BrowserRouter>\n    <StoreProvider>\n\n      <ErrorBoundary>\n\n        <ThemeProvider>\n\n          <App />\n\n        </ThemeProvider>\n\n      </ErrorBoundary>\n\n    </StoreProvider>\n\n  </BrowserRouter>,\n\n  document.getElementById(\'root\')\n\n);\n\n'
      },
      {
        id: '3',
        type: 'TEXT',
        title: 'Header this block 333',
        paragraphs: [
          'Some paragraph nuh... ',
          'Download 298 Javascript Vector Icons for commercial and personal use. Available for free or premium in line, flat, gradient, isometric, glyph, sticker & more design styles.',
          'Free Javascript icons in various UI design styles for web, mobile. Download static and animated Javascript vector icons for free in PNG, SVG, GIF formats.'
        ]
      },
      {
        id: '4',
        type: 'CODE',
        code: 'import { render } from \'react-dom\';\n import { BrowserRouter } from \'react-router-dom\';\n import { ErrorBoundary } from \'app/providers/error-boundary\';\n import { StoreProvider } from \'app/providers/store\';\n import { ThemeProvider } from \'app/providers/theme\';\n import { App } from \'./app\';\n import \'shared/config/i18n\';\n import \'./app/styles/index.scss\';\n \n\n render(\n  <BrowserRouter>\n    <StoreProvider>\n\n      <ErrorBoundary>\n\n        <ThemeProvider>\n\n          <App />\n\n        </ThemeProvider>\n\n      </ErrorBoundary>\n\n    </StoreProvider>\n\n  </BrowserRouter>,\n\n  document.getElementById(\'root\')\n\n);\n\n'
      },
      {
        id: '9',
        type: 'IMAGE',
        title: 'Image title nuh',
        src: 'https://insights.dice.com/wp-content/uploads/2018/12/shutterstock_701467699.jpg'
      },
      {
        id: '5',
        type: 'TEXT',
        title: 'Header this block 555',
        paragraphs: [
          'Some paragraph nuh... ',
          'Download 298 Javascript Vector Icons for commercial and personal use. Available for free or premium in line, flat, gradient, isometric, glyph, sticker & more design styles.',
          'Free Javascript icons in various UI design styles for web, mobile. Download static and animated Javascript vector icons for free in PNG, SVG, GIF formats.'
        ]
      },
      {
        id: '7',
        type: 'IMAGE',
        title: 'Image title nuh',
        src: 'https://insights.dice.com/wp-content/uploads/2018/12/shutterstock_701467699.jpg'
      },
      {
        id: '8',
        type: 'TEXT',
        title: 'Header this block 888',
        paragraphs: [
          'Some paragraph nuh... ',
          'Download 298 Javascript Vector Icons for commercial and personal use. Available for free or premium in line, flat, gradient, isometric, glyph, sticker & more design styles.',
          'Free Javascript icons in various UI design styles for web, mobile. Download static and animated Javascript vector icons for free in PNG, SVG, GIF formats.'
        ]
      },
      {
        id: '10',
        type: 'IMAGE',
        title: 'Image title nuh',
        src: 'https://insights.dice.com/wp-content/uploads/2018/12/shutterstock_701467699.jpg'
      },
      {
        id: '11',
        type: 'TEXT',
        title: 'Header this block 888',
        paragraphs: [
          'Some paragraph nuh... ',
          'Download 298 Javascript Vector Icons for commercial and personal use. Available for free or premium in line, flat, gradient, isometric, glyph, sticker & more design styles.',
          'Free Javascript icons in various UI design styles for web, mobile. Download static and animated Javascript vector icons for free in PNG, SVG, GIF formats.'
        ]
      },
      {
        id: '12',
        type: 'TEXT',
        paragraphs: [
          'Some paragraph nuh... ',
          'Download 298 Javascript Vector Icons for commercial and personal use. Available for free or premium in line, flat, gradient, isometric, glyph, sticker & more design styles.',
          'Free Javascript icons in various UI design styles for web, mobile. Download static and animated Javascript vector icons for free in PNG, SVG, GIF formats.',
          'Sds Download 298 Javascript Vector Icons for commercial and personal use. Available for free or premium in line, flat, gradient, isometric, glyph, sticker & more design styles.',
          'Asxr Free Javascript icons in various UI design styles for web, mobile. Download static and animated Javascript vector icons for free in PNG, SVG, GIF formats.'
        ]
      }
    ]
  }  as Article;


  return (
    <div>
      <ArticleList
        articles={[article]}
      />
    </div>
  )
});

export default ArticlePage;
