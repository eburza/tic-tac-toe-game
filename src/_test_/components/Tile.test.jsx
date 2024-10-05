import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tile from '../../components/Tile';

describe('Tile component', () => {
    it('renders correctly', () => {
      const { getByRole } = render(<Tile id="test-tile" handleClick={() => {}} />);
      expect(getByRole('button')).toBeInTheDocument();
    });
  
    it('displays X when tileContent is X', () => {
      const { getByAltText } = render(<Tile id="test-tile" handleClick={() => {}} tileContent="X" />);
      expect(getByAltText('X')).toBeInTheDocument();
    });
  
    it('calls handleClick when clicked', () => {
      const handleClick = jest.fn();
      const { getByRole } = render(<Tile id="test-tile" handleClick={handleClick} />);
      fireEvent.click(getByRole('button'));
      expect(handleClick).toHaveBeenCalled();
    });
  });