$(document).ready(function () {
  $("select").on("change", (e) => {
    const selectedItem = $("select").find("option:selected").val();
    $(`.nav-link[href="${selectedItem}"]`).click();

    console.log(selectedItem, `.nav-link[href="${selectedItem}"]`);
    $("html,body").animate(
      {
        scrollTop: $(selectedItem).offset().top,
      },
      500
    );
  });
});
