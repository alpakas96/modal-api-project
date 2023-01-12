export default function Overlay({ modalOpen, handleModalClose, modalSrc }) {
    return (
      <>
        {modalOpen && (
          <div class="overlay"></div>
        )}
      </>
    );
}
  
  