import React from 'react';

const ChildSafety: React.FC = () => {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Child Safety Standards</h1>
      <p>
        The Guy App is committed to ensuring a safe environment for all users,
        especially children. We strictly comply with all relevant child safety laws and take proactive measures against child sexual abuse and exploitation (CSAE).
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Reporting and Prevention</h2>
      <p>
        Our app allows users to report any child safety concerns directly in-app.
        We promptly investigate reports and cooperate with regional and national authorities as required by law.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact</h2>
      <p>
        For any questions or concerns regarding child safety and compliance,
        please contact us at <a href="mailto:bradleycoppinger@gmail.com" className="text-blue-600 underline">bradleycoppinger@gmail.com</a>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Further Information</h2>
      <p>
        To learn more about reporting requirements, please visit the
        <a href="https://support.google.com/googleplay/android-developer/answer/9047303" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline"> Google Play Help Center</a>.
      </p>
    </main>
  );
};

export default ChildSafety;
