import React from 'react';
import PropTypes from 'prop-types';
import Weapon from '../Weapon/Weapon';
import { computeWinner } from '../../utils';
import {
  numToWeaponMap,
  numToResultMap,
  numToDetailResultMap,
} from '../../constants';
import style from './Battlefield.css';

const Battlefield = ({
  firstName,
  firstSelection,
  secondSelection,
}) => {
  // default values for before weapon selection
  let winner = '';
  let result = '';
  let detailedResult = '';
  let firstWeapon = 'questionmark';
  let secondWeapon = 'questionmark';
  // once weapon selection is made
  if (firstName !== undefined &&
      firstSelection !== undefined &&
      secondSelection !== undefined) {
    winner = computeWinner(firstSelection, secondSelection);
    result = `${firstName} ${numToResultMap[winner]}`;
    detailedResult = numToDetailResultMap[firstSelection][secondSelection];
    firstWeapon = `${numToWeaponMap[firstSelection]}`;
    secondWeapon = `${numToWeaponMap[secondSelection]}`;
  }
  return (
    <div className={style.outerContainer} >
      <div className={style.resultDiv}>
        {result}
      </div>
      <div className={style.innerContainer}>
        <Weapon name={firstWeapon} />
        VS
        <Weapon name={secondWeapon} />
      </div>
      <div className={style.resultDiv}>
        {detailedResult}
      </div>
    </div>
  );
};

Battlefield.propTypes = {
  firstName: PropTypes.string,
  firstSelection: PropTypes.number,
  secondSelection: PropTypes.number,
};

export default Battlefield;
