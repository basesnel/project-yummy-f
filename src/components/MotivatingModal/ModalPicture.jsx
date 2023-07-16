import mobile1x from '../../assets/images/motivating/background/mobile1x.svg';
import mobile2x from '../../assets/images/motivating/background/mobile2x.svg';

export default function SigninImg() {
  return (
    <picture>
      <source
        type="image/svg+xml"
        srcSet={`${mobile1x} 1x,${mobile2x} 2x`}
        media="(min-width: 375px)"
      />
      <img src={mobile1x} alt="Motivating Background" />
    </picture>
  );
}
