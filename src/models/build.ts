// export type BuildResponse = {
//     routes: RouteResponse[];
//     menu: MenuResponse;
//     footer: FooterResponse;
// };

// export type RouteResponse = {
//     id: number;
//     path: string;
//     target: {
//       relationTo: string;
//       value: PageResponse;  //Add other possible responses later (maybe an establishment?)
//     };
//     updatedAt: string;
//     createdAt: string;
// };

// export type PageResponse =
//     {
//         id: number;
//         title: string;
//         slug: string;
//         blocks: {
//           id: string;
//           blockName: null | string;
//           blockType: string;
//           blocks?: {
//             id: string;
//             richText: [
//               {
//                 children: [
//                   {
//                     text: string;
//                   }
//                 ];
//               }
//             ];
//             blockName: null | string;
//             blockType: string;
//           }[];
//         }[];
//         updatedAt: string;
//         createdAt: string;
//       };

// export type MenuResponse = {};

// export type FooterResponse = {};
