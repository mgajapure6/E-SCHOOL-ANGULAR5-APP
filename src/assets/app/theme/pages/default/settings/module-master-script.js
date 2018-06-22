var DatatablesExtensionButtons = {
    init: function() {
        var t;
        t = $("#m_table_2").DataTable({
            responsive: !0,
            buttons: ["print", "copyHtml5", "excelHtml5", "csvHtml5", "pdfHtml5"],
        }), $("#export_print").on("click", function(e) {
            e.preventDefault(), t.button(0).trigger()
        }), $("#export_copy").on("click", function(e) {
            e.preventDefault(), t.button(1).trigger()
        }), $("#export_excel").on("click", function(e) {
            e.preventDefault(), t.button(2).trigger()
        }), $("#export_csv").on("click", function(e) {
            e.preventDefault(), t.button(3).trigger()
        }), $("#export_pdf").on("click", function(e) {
            e.preventDefault(), t.button(4).trigger()
        })
    }
};

function addClasses() {
    $('.dataTables_filter').addClass('form-inline');
    $('.dataTables_length').addClass('form-inline');
}

var formValidation={
    init: function() {
        $("#m_form_1").validate({
            rules: {
                MODULE_NAME: {
                    required: !0,
                },
                ENTITY_ID: {
                    required: !0
                },
                STATUS: {
                    required: !0,
                }
            },
            invalidHandler: function(e, r) {
                var i = $("#m_form_1_msg");
                i.removeClass("m--hide").show(), mApp.scrollTo(i, -200)
            },
            submitHandler: function(e) {}
        });
    }
}

jQuery(document).ready(function() {
    DatatablesExtensionButtons.init();
    addClasses();
    formValidation.init();
});