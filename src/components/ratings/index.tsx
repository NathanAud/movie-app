interface Props {
    rating: number | string
}

export const Ratings = ({rating}: Props) => {
  return (
    <div>⭐ {+rating ? (+rating).toPrecision(2) : '-'}/10</div>
  )
}
