var MenuDatatable = {
    init: function() {
        var t;
        t = $("#m_table_menu").DataTable({
            destroy:!0,
            responsive: !0,
            scrollY:"200px",
            scrollCollapse:!0,
            paging:0,
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

jQuery(document).ready(function() {
    MenuDatatable.init();
    addClasses();
});