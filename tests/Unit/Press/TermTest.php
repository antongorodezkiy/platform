<?php

namespace Orchid\Tests\Unit\Press;

use Orchid\Press\Models\Term;
use Orchid\Tests\TestUnitCase;
use Orchid\Press\Models\Taxonomy;

class TermTest extends TestUnitCase
{
    /**
     * @test
     */
    public function it_has_the_correct_instance()
    {
        $term = $this->createTermWithTaxonomy();
        $taxonomy = Taxonomy::where('term_id', $term->id)->first();

        $this->assertInstanceOf(Term::class, $term);
        $this->assertInstanceOf(Taxonomy::class, $taxonomy);
        $this->assertInstanceOf(Term::class, $taxonomy->term);
    }

    /**
     * @test
     */
    public function it_is_correct_routekeyname()
    {
        $term = $this->createTermWithTaxonomy();
        $this->assertEquals('slug', $term->getRouteKeyName());
    }

    /**
     * @return Term
     */
    private function createTermWithTaxonomy()
    {
        $term = factory(Term::class)->create();
        $term->taxonomy()->save(factory(Taxonomy::class)->make());

        return $term;
    }
}
