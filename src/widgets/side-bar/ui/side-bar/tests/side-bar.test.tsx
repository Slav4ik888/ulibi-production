import { screen, fireEvent } from '@testing-library/react';
import { componentRender } from '../../../../../../config/tests';
import { SideBar } from '..';


describe('<SideBar />', () => {
  test('Default render', () => {
    componentRender(<SideBar />);

    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  });

  test('Toggle button click', () => {
    componentRender(<SideBar />);

    const toggleBtn = screen.getByTestId('side-bar-toggle');
    fireEvent.click(toggleBtn);

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');

    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
  });
});

// npm run test:unit side-bar.test.tsx
