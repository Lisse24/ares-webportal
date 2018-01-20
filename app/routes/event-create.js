import Route from '@ember/routing/route';
import AuthenticatedRoute from 'ares-webclient/mixins/authenticated-route';

export default Route.extend(AuthenticatedRoute, {
    model: function() {
        return this.modelFor('application');
    }
});