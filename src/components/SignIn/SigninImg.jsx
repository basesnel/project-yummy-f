import img_375_1x from '../../assets/images/signin/Order-food-pana-375-1x.png';
import img_375_2x from '../../assets/images/signin/Order-food-pana-375-2x.png';
import img_768_1x from '../../assets/images/signin/Order-food-pana-768-1x.png';
import img_768_2x from '../../assets/images/signin/Order-food-pana-768-2x.png';
import img_1200_1x from '../../assets/images/signin/Order-food-pana-1200-1x.png';
import img_1200_2x from '../../assets/images/signin/Order-food-pana-1200-2x.png';

export default function SigninImg() {
  return (
    <picture>
      <source
        srcSet={`${img_1200_1x} 1x,${img_1200_2x} 2x`}
        media="(min-width: 1440px)"
      />
      <source
        srcSet={`${img_768_1x} 1x,${img_768_2x} 2x`}
        media="(min-width: 768px)"
      />
      <source
        srcSet={`${img_375_1x} 1x,${img_375_2x} 2x`}
        media="(min-width: 375px)"
      />
      <img src={img_375_1x} alt="Girl with computer" />
    </picture>
  );
}
