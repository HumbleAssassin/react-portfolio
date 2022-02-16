export const SocialMediaIcon = ({ url, name }) => {
   return (
      <a href={url} target="_blank" rel="noreferrer" className={`${name} social-link text-white`}>
         <i className="fab fa-google"></i>
      </a>
   )
}
