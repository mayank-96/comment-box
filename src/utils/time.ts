function secondsToMMSS(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  let remainingSeconds = Math.floor(seconds % 60);

  const MM = minutes < 10 ? `0${minutes}` : `${minutes}`;
  let SS =
    remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;

  return `${MM}:${SS}`;
}

export { secondsToMMSS };
