'use client';

import dynamic from 'next/dynamic';

const PrelineScript = dynamic(() => import('./../components/PipelineScript'), {
  ssr: false,
});

export default function PrelineScriptWrapper() {
  return <PrelineScript />;
}