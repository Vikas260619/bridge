import illustrationSignIn from '../../../assets/images/login_banner.png';

const SetPasswordCarousel = () => {
  return (
    <div className="text-center">
      <div>
        <img src={illustrationSignIn} alt="logo" style={{ maxWidth: '100%' }} />
      </div>
      <div>
        <div className="text-bold text-32">Welcome back to BridgeUp</div>
        <div className="text-14 text-medium text-color-3">
          Turn your recurring revenue streams into instant, upfront capital.
          <br />
          No debt. No dilution. No strings.
        </div>
      </div>
    </div>
  );
};

export default SetPasswordCarousel;
