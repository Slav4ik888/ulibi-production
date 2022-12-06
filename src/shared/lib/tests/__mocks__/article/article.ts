/* eslint-disable max-len */
import { Article, ArticleBlockType, ArticleType } from 'entities/article/model/types';


export const ARTICLE: Article = {
  id: '1',
  title: 'JS - news',
  subtitle: 'What news in JS in 2022',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.03.2022',
  type: [ArticleType.IT, ArticleType.DESING],
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Header this block 111',
      paragraphs: [
        'Some paragraph nuh... ',
        'Download 298 Javascript Vector Icons for commercial and personal use. Available for free or premium in line, flat, gradient, isometric, glyph, sticker & more design styles.',
        'Free Javascript icons in various UI design styles for web, mobile. Download static and animated Javascript vector icons for free in PNG, SVG, GIF formats.'
      ]
    },
    {
      id: '2',
      type: ArticleBlockType.CODE,
      code: "import { render } from 'react-dom';\n import { BrowserRouter } from 'react-router-dom';\n import { ErrorBoundary } from 'app/providers/error-boundary';\n import { StoreProvider } from 'app/providers/store';\n import { ThemeProvider } from 'app/providers/theme';\n import { App } from './app';\n import 'shared/config/i18n';\n import './app/styles/index.scss';\n \n\n render(\n  <BrowserRouter>\n    <StoreProvider>\n\n      <ErrorBoundary>\n\n        <ThemeProvider>\n\n          <App />\n\n        </ThemeProvider>\n\n      </ErrorBoundary>\n\n    </StoreProvider>\n\n  </BrowserRouter>,\n\n  document.getElementById('root')\n\n);\n\n"
    },
    {
      id: '9',
      type: ArticleBlockType.IMAGE,
      title: 'Image title nuh',
      src: '' // 'js.png '  // 'https://insights.dice.com/wp-content/uploads/2018/12/shutterstock_701467699.jpg'
    }
  ]
};
