import { useEffect, useRef, useState } from 'react';
import OrderStatus from '../OrderStatus/OrderStatus';
import classes from './RecentOrders.module.css';

// component to display recent orders. Event handlers attached to make scrolling possible with mouse click and drag, and with mouse wheel for horizontal scroll
export default function RecentOrders({ recentOrders }) {
  const sliderRef = useRef();
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isContainerOverflowing, setIsContainerOverflowing] = useState(false);

  useEffect(() => {
    let mouseDown = false;
    setIsMouseDown(false); //used isMouseDown state to add class to change cursor to grabbing when true
    let startX, scrollLeft;
    let pointerId;
    const slider = sliderRef.current;
    const startDragging = (e) => {
      if (e.target.nodeName === 'SPAN') {
        return;
      }
      mouseDown = true;
      pointerId = e.pointerId;
      setIsMouseDown(true);
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      slider.setPointerCapture(pointerId);
    };
    const stopDragging = () => {
      mouseDown = false;
      setIsMouseDown(false);
      slider.releasePointerCapture(pointerId);
    };
    const move = (e) => {
      if (e.target.nodeName === 'SPAN') {
        return;
      }
      e.preventDefault();
      if (!mouseDown) {
        return;
      }
      const x = e.pageX - slider.offsetLeft;
      const scroll = x - startX;
      slider.scrollLeft = scrollLeft - scroll;
    };
    function handleWheel(e) {
      if (!isContainerOverflowing) {
        return;
      }
      if (e.deltaY !== 0 && e.target.nodeName !== 'P') {
        e.preventDefault();
        if (slider) {
          slider.scrollLeft += e.deltaY;
        }
      }
    }

    function checkOverflow() {
      setIsContainerOverflowing(slider.clientWidth < slider.scrollWidth);
    }
    checkOverflow();
    // Add the event listeners
    slider.addEventListener('pointermove', move, false);
    slider.addEventListener('pointerdown', startDragging, false);
    slider.addEventListener('pointerup', stopDragging, false);
    slider.addEventListener('wheel', handleWheel, false);
    window.addEventListener('resize', checkOverflow, false);
    return () => {
      slider.removeEventListener('pointermove', move, false);
      slider.removeEventListener('pointerdown', stopDragging, false);
      slider.removeEventListener('pointerup', stopDragging, false);
      slider.removeEventListener('wheel', handleWheel, false);
      window.removeEventListener('resize', checkOverflow, false);
    };
  }, []);

  return (
    <div className={classes.recentOrders}>
      <h3>Recent Orders</h3>
      <div
        className={`${classes.ordersContainer} ${
          isMouseDown && isContainerOverflowing ? classes.grabbing : ''
        }`}
        ref={sliderRef}
      >
        <div className={classes.gridRow}>
          <div>Customer</div>
          <div>Order No.</div>
          <div>Amount</div>
          <div>Status</div>
        </div>

        {recentOrders.map((order) => (
          <div key={order.orderId} className={classes.gridRow}>
            <div className={classes.customer}>
              <img
                src={order.customerImage}
                alt={`Profile photo of ${order.customerName}`}
              />
              <span>{order.customerName}</span>
            </div>
            <div>
              <span>{order.orderId}</span>
            </div>
            <div>
              <span className={`dollar ${classes.dollar}`}>$</span>
              <span>{order.orderValue.toFixed(2)}</span>
            </div>
            <div>
              <span>
                <OrderStatus status={order.orderStatus} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
