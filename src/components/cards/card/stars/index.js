import React from "react";

export default function Stars({ stelle }) {
  return [...Array(5)].map((el, index) => {
    return index < stelle ? (
      <i key={index} class="fas fa-star icon_product"></i>
    ) : (
      <i key={index} class="far fa-star icon_product"></i>
    );
  });

  // switch (stelle) {
  //   case 1:
  //     return (
  //       <>
  //         <i class="fas fa-star icon_product"></i>
  //         <i class="far fa-star icon_product"></i>
  //         <i class="far fa-star icon_product"></i>
  //         <i class="far fa-star icon_product"></i>
  //         <i class="far fa-star icon_product"></i>
  //       </>
  //     );
  //   case 2:
  //     return (
  //       <>
  //         <i class="fas fa-star icon_product"></i>
  //         <i class="fas fa-star icon_product"></i>
  //         <i class="far fa-star icon_product"></i>
  //         <i class="far fa-star icon_product"></i>
  //         <i class="far fa-star icon_product"></i>
  //       </>
  //     );
  //   case 3:
  //     return (
  //       <>
  //         <i class="fas fa-star icon_product"></i>
  //         <i class="fas fa-star icon_product"></i>
  //         <i class="fas fa-star icon_product"></i>
  //         <i class="far fa-star icon_product"></i>
  //         <i class="far fa-star icon_product"></i>
  //       </>
  //     );
  //   case 4:
  //     return (
  //       <>
  //         <i class="fas fa-star icon_product"></i>
  //         <i class="fas fa-star icon_product"></i>
  //         <i class="fas fa-star icon_product"></i>
  //         <i class="fas fa-star icon_product"></i>
  //         <i class="far fa-star icon_product"></i>
  //       </>
  //     );
  //   case 5:
  //     return (
  //       <>
  //         <i class="fas fa-star icon_product"></i>
  //         <i class="fas fa-star icon_product"></i>
  //         <i class="fas fa-star icon_product"></i>
  //         <i class="fas fa-star icon_product"></i>
  //         <i class="fas fa-star icon_product"></i>
  //       </>
  //     );
  // }
}
