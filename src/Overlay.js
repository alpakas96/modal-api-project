export default function Overlay({ modalOpen }) {
    return (
      <>
        {modalOpen && (
          <div class="overlay"></div>
        )}
      </>
    );
}
  
  