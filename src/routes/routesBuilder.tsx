import { MainLayout } from '../layouts/mainLayout';
import { ErrorPage } from '../pages/errorPage';
import { DemonstratorsPage } from '../pages/demonstratorsPage';
import { ImageViewerPage } from '../pages/imageViewerPage';
import { ImageSecureViewerPage } from '../pages/imageSecureViewerPage';
import { ClicksCounterPage } from '../pages/clicksCounterPage';

function createRoutes() {
  return [
    {
      path: '/',
      element: <MainLayout />,
      errorElement: (
        <MainLayout>
          <ErrorPage />
        </MainLayout>
      ),
      children: [
        {
          path: '/clicksCounter',
          element: <ClicksCounterPage />,
        },
        {
          path: '/demonstrators',
          element: <DemonstratorsPage />,
        },
        {
          path: '/imageViewer',
          element: <ImageViewerPage />,
        },
        {
          path: '/imageSecureViewer',
          element: <ImageSecureViewerPage />,
        },
      ],
    },
  ];
}

export { createRoutes };
