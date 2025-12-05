function removeFromCart(name) {
  Swal.fire({
    title: "Are you sure?",
    text: "This item will be removed from your cart.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Delete",
    cancelButtonText: "Cancel",
    reverseButtons: true,
    customClass: {
      confirmButton: "delete-btn",
      cancelButton: "cancel-btn",
      popup: "alert-popup"
    },
    buttonsStyling: false
  }).then((result) => {

    if (result.isConfirmed) {

      // DELETE ITEM
      cart = cart.filter(i => i.name !== name);
      localStorage.setItem("korangiCart", JSON.stringify(cart));
      updateCartUI();

      Swal.fire({
        title: "Deleted!",
        text: "Item removed successfully.",
        icon: "success",
        customClass: {
          popup: "alert-popup"
        }
      });

    } else if (result.dismiss === Swal.DismissReason.cancel) {

      Swal.fire({
        title: "Cancelled",
        text: "Your item is safe.",
        icon: "error",
        customClass: {
          popup: "alert-popup"
        }
      });

    }
  });
}



function sweetmesage(msg){
  Swal.fire({
    html: `
      <div class="text-center">
        <div class="text-5xl mb-3 animate-bounce">🎉</div>
        <h2 class="text-xl font-bold mb-1">Order Sent Successfully!</h2>
        <p class="text-sm opacity-90">${msg}</p>
      </div>
    `,
    background: "linear-gradient(135deg, #ffffff, #e3f2ff)",
    color: "#1e3a8a",
    icon: "success",
    timer: 4000,
    showConfirmButton: false,
    timerProgressBar: true,
    padding: "25px 20px",
    customClass: {
      popup: "rounded-3xl shadow-xl border border-blue-200"
    }
  });
}
