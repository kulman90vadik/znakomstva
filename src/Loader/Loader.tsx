
import ContentLoader from "react-content-loader"

const MyLoader = () => (
  <ContentLoader 
    speed={2}
    height={350}
    viewBox="0 0 283 350"
    backgroundColor="#7790ca"
    foregroundColor="revolver"
  >
    <rect x="10" y="290" rx="38" ry="38" width="90%" height="50" /> 
    <rect x="10" y="250" rx="14" ry="4" width="50%" height="25" /> 
    <rect x="10" y="207" rx="14" ry="4" width="70%" height="31" />
  </ContentLoader>
)

export default MyLoader
