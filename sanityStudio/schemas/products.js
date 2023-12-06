export default {
  name: 'products',
  title: '상품',
  type: 'document',
  fields: [
    {
      name: 'mainImage',
      title: '메인 이미지',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {name: 'name', title: '상품명', type: 'string'},
    {name: 'price', title: '가격', type: 'number'},
    {name: 'description', title: '설명', type: 'text'},
    {name: 'features', title: '특징', type: 'array', of: [{type: 'string'}]},
    {
      name: 'images',
      title: '이미지',
      type: 'array',
      of: [{type: 'image'}],
      options: {layout: 'grid'},
      validation: (Rule) => Rule.min(1).error('최소 1개의 이미지가 필요합니다.'),
    },
    {
      name: 'category',
      title: '카테고리',
      type: 'string',
      options: {
        list: [
          {
            title: 'All',
            value: 'all',
          },
          {
            title: 'The Tool Sets',
            value: 'theToolSets',
          },
          {
            title: 'Tool Cases',
            value: 'toolCases',
          },
          {
            title: 'Tomahawk Smoothing Blades',
            value: 'tomahawkSmoothingBlades',
          },
          {
            title: 'Automatic Tapers',
            value: 'automaticTapers',
          },
          {
            title: 'Pumps',
            value: 'pumps',
          },
          {
            title: 'Finishing Boxes',
            value: 'finishingBoxes',
          },
          {
            title: 'Angle Heads',
            value: 'angleHeads',
          },
          {
            title: 'Corner Boxes',
            value: 'cornerBoxes',
          },
          {
            title: 'Nail Spotters',
            value: 'nailSpotters',
          },
          {
            title: 'Corner Rollers',
            value: 'cornerRollers',
          },
          {
            title: 'Corner Flushers',
            value: 'cornerFlushers',
          },
          {
            title: 'Semi Automatic Taper',
            value: 'semiAutomaticTaper',
          },
          {
            title: 'Applicators',
            value: 'applicators',
          },
          {
            title: 'Compound Tubes',
            value: 'compoundTubes',
          },
          {
            title: 'Handles',
            value: 'handles',
          },
          {
            title: 'Grooved Mud Heads',
            value: 'groovedMudHeads',
          },
          {
            title: 'Sanders',
            value: 'sanders',
          },
          {
            title: 'Maintenance Kits',
            value: 'maintenanceKits',
          },
        ],
      },
    },
    {
      name: 'detailCategory',
      title: '상세 카테고리',
      type: 'string',
      options: {
        list: [
          {
            title: 'Automatic Taper Maintenance Kits',
            value: 'automaticTaperMaintenanceKits',
          },
          {
            title: 'Finishing Box Maintenance Kits',
            value: 'finishingBoxMaintenanceKits',
          },
          {
            title: 'Nailspotter Maintenance Kits',
            value: 'nailspotterMaintenanceKits',
          },
          {
            title: 'Anglehead Maintenance Kits',
            value: 'angleheadMaintenanceKits',
          },
          {
            title: 'Corner Roller Maintenance Kits',
            value: 'cornerRollerMaintenanceKits',
          },
          {
            title: 'Handle Maintenance Kits',
            value: 'handleMaintenanceKits',
          },
          {
            title: 'Mud Pump Maintenance Kits',
            value: 'mudPumpMaintenanceKits',
          },
          // 추가적인 상세 카테고리 리스트
        ],
      },
      // visibility 옵션을 통해 조건을 설정합니다.
      // maintenanceKits가 선택되었을 때에만 나타나도록 설정합니다.
      hidden: ({document}) => document.category !== 'maintenanceKits',
    },
    {
      name: 'youtubeUrls',
      title: '유튜브 URL',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'recommends',
      title: '추천 상품',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'products'}],
        },
      ],
    },
  ],
}
