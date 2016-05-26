$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var apptType = $("#apptType").val();
    var employeeId = $("employeeId").val();
    var apptDate = $("#apptDate").val();
    var apptTime = $("input:radio[name=apptTime]:checked").val();
    var firstNameInput= $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".apptType").text(apptType);
    $(".employeeId").text(employeeId);
    $(".apptTime").text(apptTime);
    $(".apptDate").text(apptDate);

    $("#confirmation").show();

    event.preventDefault();
  });
});
