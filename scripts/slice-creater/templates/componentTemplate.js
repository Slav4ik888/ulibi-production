const interfaceConst = 'interface';

module.exports = (styleName, componentName) => `import { cn } from 'shared/lib/class-names/index';
import { useTranslation } from 'react-i18next';
import cls from './index.module.scss';
import { memo } from 'react';



${interfaceConst} ${componentName}Props {
  className?: string;
}

export const ${componentName} = memo((props: ${componentName}Props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={cn(cls.${styleName}, {}, [className])}>
      
    </div>
  );
});
`;
