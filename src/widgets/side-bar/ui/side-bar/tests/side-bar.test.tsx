import { screen, fireEvent } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/render-with-translation';
import { SideBar } from '..';


describe('<SideBar />', () => {
  test('Default render', () => {
    renderWithTranslation(<SideBar />);

    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  });

  test('Toggle button click', () => {
    renderWithTranslation(<SideBar />);

    const toggleBtn = screen.getByTestId('side-bar-toggle');
    fireEvent.click(toggleBtn);

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');

    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
  });
});

// npm run unit side-bar.test.tsx
