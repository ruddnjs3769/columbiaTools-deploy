export default {
  title: '장바구니',
  name: 'cart',
  type: 'document',
  fields: [
    {
      title: '유저이메일',
      name: 'userEmail',
      type: 'string',
    },
    {
      title: '주문날짜',
      name: 'orderDate',
      type: 'string',
    },
    {
      title: '주문시간',
      name: 'createdAt',
      type: 'string',
    },
    {
      title: '주문금액',
      name: 'orderAmount',
      type: 'number',
    },
    {
      title: '총 주문 개수',
      name: 'orderCount',
      type: 'number',
    },
    {
      title: '주문상태',
      name: 'orderStatus',
      type: 'string',
      options: {
        list: [
          {
            title: '결재 전',
            value: 'preparing',
          },
          {
            title: '결재완료',
            value: 'payed',
          },
          {
            title: '배송 준비중',
            value: 'ready',
          },
          {
            title: '배송 중',
            value: 'moving',
          },
          {
            title: '배송 완료',
            value: 'done',
          },
          {
            title: '주문취소',
            value: 'canceled',
          },
        ],
      },
    },
    {
      title: '주문상품',
      name: 'cartItems',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'cartItem',
          fields: [
            {
              title: '상품아이디',
              name: 'id',
              type: 'string',
            },
            {
              title: '상품이미지',
              name: 'imageURL',
              type: 'string',
            },
            {
              title: '상품명',
              name: 'name',
              type: 'string',
            },
            {
              title: '상품가격',
              name: 'price',
              type: 'number',
            },
            {
              title: '상품수량',
              name: 'cartQuantity',
              type: 'number',
            },
          ],
        },
      ],
    },
    {
      title: '발송정보',
      name: 'billingAddress',
      type: 'object',
      fields: [
        /* {
          title: "우편번호",
          name: "postalCode",
          type: "string",
        },
        {
          title: "배송지역",
          name: "city",
          type: "string",
        },
        {
          title: "배송주소1",
          name: "line",
          type: "string",
        },*/
        {
          title: '발송인',
          name: 'name',
          type: 'string',
        },
        {
          title: '연락처',
          name: 'phone',
          type: 'string',
        },
        {
          title: '이메일',
          name: 'userEmail',
          type: 'string',
        },
        {
          title: '메모',
          name: 'memo',
          type: 'string',
        },
      ],
    },
    {
      title: '배송지',
      name: 'shippingAddress',
      type: 'object',
      fields: [
        {
          title: '수취인',
          name: 'name',
          type: 'string',
        },
        {
          title: '우편번호',
          name: 'postalCode',
          type: 'string',
        },
        {
          title: '배송지역',
          name: 'city',
          type: 'string',
        },
        {
          title: '배송주소1',
          name: 'line',
          type: 'string',
        },
        {
          title: '연락처',
          name: 'phone',
          type: 'string',
        },
      ],
    },
  ],
}
