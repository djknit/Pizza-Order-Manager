$(document).on("click", ".new-order", newOrder);

// Function for starting a new order
function newOrder() {
    // Display the order screen
    showOrderScreen();
    // 
}

// Function for displaying the order placing screen
function showOrderScreen() {
    // Fill the main content area of the page with the order editor basic html
    $("main").html(`
        <div class="card order">
            <div class="card-header">
                <span class="card-heading">Order Editor</span>
                <nav>
                    <ul class="nav">
                        <li>
                            <button type="button" class="btn btn-primary ice-order">Ice This Order</button>
                        </li>
                        <li>
                            <button type="button" class="btn btn-danger cancel-order">Cancel This Order</button>
                        </li>
                    </ul>
                </nav>
                <br>
                <span class="order card-header-info">Current total: $ 0.00</span>
            </div>
            <div class="card-body order">
                <div class="pickup-delivery">
                    <h5 class="card-title">Is this order for pickup or delivery?</h5>
                    You must select an option to continue. You change the selection later if you need to.
                    <div class="button-holder">
                        <button type="button" class="btn btn-outline-secondary" id="pickup">Pick-up</button>
                        <button type="button" class="btn btn-outline-secondary" id="delivery">Delivery</button>
                    </div>
                </div>
            </div>
        </div>
    `);
}

// const pickupOrDelivery