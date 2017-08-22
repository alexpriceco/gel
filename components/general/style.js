export const Style = (props) => (
  <style dangerouslySetInnerHTML={{ __html: props.sheet }} />
)

export default Style
