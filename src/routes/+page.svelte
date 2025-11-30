<script lang="ts">
	import { Separator, DiagonalSeparator } from '$lib/components/separator';
	import {
		HeroSection,
		ProfileSection,
		OneLinerSection,
		LinksSection,
		AboutSection,
		TechStackSection,
		ExperienceSection,
		ProjectsSection,
		CertificationsSection,
		GithubContributionSection,
	} from '$lib/components/home';

	let { data } = $props();
</script>

<div class="min-h-dvh font-mono">
	<Separator />
	<HeroSection />
	<Separator />
	<ProfileSection />
	<DiagonalSeparator />
	<OneLinerSection />
	<DiagonalSeparator />
	<LinksSection />
	<DiagonalSeparator />
	<AboutSection />
	<DiagonalSeparator />
	<TechStackSection />
	<DiagonalSeparator />
	<GithubContributionSection weeks={data.weeks} />
	<!-- <DiagonalSeparator />
	<ExperienceSection /> -->
	<DiagonalSeparator />
	<ProjectsSection />
	<DiagonalSeparator />
	<CertificationsSection />
	<DiagonalSeparator />
</div>
