import {
  RIGHT,
  DOWN,
  LEFT,
  UP,
} from '../constants/direction-types';

export function getDistance(points, x, y) {
  const firstPoint = points[1];
  const zeroPoint = points[0];
  const dX = firstPoint[x] - zeroPoint[x];
  const dY = firstPoint[y] - zeroPoint[y];
  return Math.sqrt((dX * dX) + (dY * dY));
}

function getSwipeDirectionX(deltaX) {
  return deltaX < 0 ? RIGHT : LEFT;
}

function getSwipeDirectionY(deltaY) {
  return deltaY < 0 ? DOWN : UP;
}

function getSwipeDirection(deltaX, absX, deltaY, absY) {
  return (absX > absY) ? getSwipeDirectionX(deltaX) : getSwipeDirectionY(deltaY);
}

export function getSwipeGestureName(deltaX, absX, deltaY, absY) {
  return `swipe${getSwipeDirection(deltaX, absX, deltaY, absY).toLowerCase()}`;
}

export function getSwipeEventName(deltaX, absX, deltaY, absY) {
  return `onSwipe${getSwipeDirection(deltaX, absX, deltaY, absY)}`;
}
