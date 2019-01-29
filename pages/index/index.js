Page({
  data: {
    cp_cus: ['','#000', '#fff', '#f00', '#0f0', '#00f', '#ff0', '#0ff', '#f0f'],
    cp_color: '',
    bg_color: '',
    font_color: '#333',
    border_color: '#333',
    type_sel: 'bg'
  },

  onLoad: function () {
  },

  radioChange(e) {
    this.setData({
      type_sel: e.detail.value,
      cp_color: this.data[e.detail.value + '_color']
    })
  },

  color(e){
    this.setData({
      cp_color: e.detail.color,
      [this.data.type_sel + '_color']: e.detail.color
    })
  }
})
