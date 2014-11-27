module.exports = {
  createCharge: {
    method: 'post',
    url: '/charges'
  },
  createRefund: {
    method: 'post',
    url: '/charges/{{chargeId}}/refunds'
  },
  charge: '/charges/{{chargeId}}',
  charges: '/charges',
  refund: '/charges/{{chargeId}}/refunds/{{refundId}}',
  refunds: '/charges/{{chargeId}}/refunds'
}
