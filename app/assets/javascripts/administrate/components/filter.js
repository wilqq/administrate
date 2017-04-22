$(function() {
  $('.filter-field select').change(function() {
    $(this).closest('.filter-field').find('input').prop({name: "q[" + this.value + "]"})
  })
});
