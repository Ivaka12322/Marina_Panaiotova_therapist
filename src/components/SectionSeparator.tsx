export default function SectionSeparator() {
  return (
    <div
      className="py-4 flex items-center justify-center"
      style={{ backgroundColor: '#1A1610' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        {/* Mobile: 2 items */}
        <div className="lg:hidden flex items-center justify-center gap-0 text-center">
          <p
            className="text-xs font-semibold tracking-[0.15em] uppercase px-4 sm:px-6 flex-1"
            style={{ color: '#8A7A6A' }}
          >
            Орхи Здраве 2024 & 2025
          </p>
          <span style={{ color: '#3A3028', height: '24px' }}>|</span>
          <p
            className="text-xs font-semibold tracking-[0.15em] uppercase px-4 sm:px-6 flex-1"
            style={{ color: '#8A7A6A' }}
          >
            Златна Фирма 2025
          </p>
        </div>

        {/* Desktop: 4 items */}
        <div className="hidden lg:flex items-center justify-center gap-0 text-center">
          <p
            className="text-xs font-semibold tracking-[0.15em] uppercase px-8 flex-1"
            style={{ color: '#8A7A6A' }}
          >
            Орхи Здраве 2024 & 2025
          </p>
          <span style={{ color: '#3A3028', height: '24px' }}>|</span>
          <p
            className="text-xs font-semibold tracking-[0.15em] uppercase px-8 flex-1"
            style={{ color: '#8A7A6A' }}
          >
            Златна Фирма 2025
          </p>
          <span style={{ color: '#3A3028', height: '24px' }}>|</span>
          <p
            className="text-xs font-semibold tracking-[0.15em] uppercase px-8 flex-1"
            style={{ color: '#8A7A6A' }}
          >
            1-во място здравеопазване
          </p>
          <span style={{ color: '#3A3028', height: '24px' }}>|</span>
          <p
            className="text-xs font-semibold tracking-[0.15em] uppercase px-8 flex-1"
            style={{ color: '#8A7A6A' }}
          >
            Хасково & Кърджали
          </p>
        </div>
      </div>
    </div>
  );
}
